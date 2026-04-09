<?php

use App\Models\Task;
use App\Models\User;

test('guest cannot view tasks', function () {
    $response = $this->get('/tasks');
    $response->assertRedirect('/login');
});

test('authenticated user can view their tasks', function () {
    $user = User::factory()->create();
    Task::factory(3)->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->get('/tasks');

    $response->assertStatus(200);
});

test('user can create a task', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/tasks', [
        'title' => 'My New Task',
        'description' => 'Task description',
        'status' => 'pending',
    ]);

    $response->assertRedirect('/tasks');
    $this->assertDatabaseHas('tasks', [
        'title' => 'My New Task',
        'user_id' => $user->id,
    ]);
});

test('user can update a task', function () {
    $user = User::factory()->create();
    $task = Task::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->put("/tasks/{$task->id}", [
        'title' => 'Updated Title',
        'status' => 'completed',
    ]);

    $response->assertRedirect('/tasks');
    $this->assertDatabaseHas('tasks', [
        'id' => $task->id,
        'title' => 'Updated Title',
        'status' => 'completed',
    ]);
});

test('user cannot update another users task', function () {
    $user1 = User::factory()->create();
    $user2 = User::factory()->create();
    $task = Task::factory()->create(['user_id' => $user1->id]);

    $response = $this->actingAs($user2)->put("/tasks/{$task->id}", [
        'title' => 'Hacked Title',
        'status' => 'completed',
    ]);

    $response->assertStatus(403);
    $this->assertDatabaseMissing('tasks', [
        'title' => 'Hacked Title',
    ]);
});

test('user can delete a task', function () {
    $user = User::factory()->create();
    $task = Task::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->delete("/tasks/{$task->id}");

    $response->assertRedirect('/tasks');
    $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
});
