package com.example.catinvaders.game

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay
import kotlin.math.max
import kotlin.math.min
import kotlin.random.Random

data class EnemyCat(var x: Float, var y: Float, var alive: Boolean = true)
data class Bullet(var x: Float, var y: Float, var active: Boolean = true)

class GameEngine {
    var playerX by mutableStateOf(500f)
    var score by mutableStateOf(0)
    var lives by mutableStateOf(3)
    var gameOver by mutableStateOf(false)

    val bullets = mutableStateListOf<Bullet>()
    val cats = mutableStateListOf<EnemyCat>()

    private var catDirection = 1

    init {
        reset()
    }

    fun reset() {
        score = 0
        lives = 3
        gameOver = false
        playerX = 500f
        bullets.clear()
        cats.clear()
        catDirection = 1

        repeat(3) { row ->
            repeat(6) { col ->
                cats.add(EnemyCat(x = 120f + col * 130f, y = 120f + row * 100f))
            }
        }
    }

    fun update(screenWidth: Float, screenHeight: Float) {
        if (gameOver) return

        bullets.forEach { bullet ->
            bullet.y -= 25f
            if (bullet.y < 0f) bullet.active = false
        }

        val livingCats = cats.filter { it.alive }
        if (livingCats.isEmpty()) {
            reset()
            return
        }

        val minX = livingCats.minOf { it.x }
        val maxX = livingCats.maxOf { it.x }

        if (minX < 40f || maxX > screenWidth - 40f) {
            catDirection *= -1
            cats.forEach { cat ->
                cat.y += 20f
            }
        }

        cats.forEach { cat ->
            if (cat.alive) {
                cat.x += 4f * catDirection
                if (cat.y > screenHeight - 200f) {
                    lives -= 1
                    cat.y = 120f
                    if (lives <= 0) gameOver = true
                }
            }
        }

        bullets.forEach { bullet ->
            cats.forEach { cat ->
                if (cat.alive && bullet.active && isHit(bullet, cat)) {
                    cat.alive = false
                    bullet.active = false
                    score += 10
                }
            }
        }

        bullets.removeAll { !it.active }

        if (Random.nextFloat() < 0.015f) {
            val shooters = cats.filter { it.alive }
            if (shooters.isNotEmpty()) {
                val selected = shooters.random()
                if (selected.y > screenHeight - 260f) {
                    lives -= 1
                    if (lives <= 0) gameOver = true
                }
            }
        }
    }

    fun shoot(screenHeight: Float) {
        if (!gameOver) {
            bullets.add(Bullet(x = playerX, y = screenHeight - 120f))
        }
    }

    private fun isHit(bullet: Bullet, cat: EnemyCat): Boolean {
        return bullet.x in (cat.x - 35f)..(cat.x + 35f) && bullet.y in (cat.y - 35f)..(cat.y + 35f)
    }
}

@Composable
fun CatInvadersScreen(engine: GameEngine) {
    var width by remember { mutableStateOf(1080f) }
    var height by remember { mutableStateOf(1920f) }

    LaunchedEffect(Unit) {
        while (true) {
            engine.update(width, height)
            delay(16)
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFF0B1020))
            .padding(12.dp),
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(
                text = "Puntaje: ${engine.score}",
                color = Color.White,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Vidas: ${engine.lives}",
                color = Color(0xFFFFD166),
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )
        }

        Box(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .pointerInput(Unit) {
                    detectDragGestures { _, dragAmount ->
                        engine.playerX = max(50f, min(width - 50f, engine.playerX + dragAmount.x))
                    }
                },
            contentAlignment = Alignment.BottomCenter
        ) {
            Canvas(modifier = Modifier.fillMaxSize()) {
                width = size.width
                height = size.height

                drawCircle(
                    color = Color(0xFF55D6BE),
                    radius = 36f,
                    center = Offset(engine.playerX, size.height - 80f)
                )
                drawCircle(
                    color = Color.White,
                    radius = 10f,
                    center = Offset(engine.playerX - 14f, size.height - 90f)
                )
                drawCircle(
                    color = Color.White,
                    radius = 10f,
                    center = Offset(engine.playerX + 14f, size.height - 90f)
                )

                engine.cats.forEach { cat ->
                    if (cat.alive) {
                        drawCircle(
                            color = Color(0xFFFF8FAB),
                            radius = 30f,
                            center = Offset(cat.x, cat.y)
                        )
                        drawCircle(color = Color.White, radius = 7f, center = Offset(cat.x - 10f, cat.y - 7f))
                        drawCircle(color = Color.White, radius = 7f, center = Offset(cat.x + 10f, cat.y - 7f))
                        drawCircle(color = Color.Black, radius = 3f, center = Offset(cat.x - 10f, cat.y - 7f))
                        drawCircle(color = Color.Black, radius = 3f, center = Offset(cat.x + 10f, cat.y - 7f))
                        drawCircle(
                            color = Color(0xFFFB7185),
                            radius = 6f,
                            center = Offset(cat.x, cat.y + 8f),
                            style = Stroke(width = 3f)
                        )
                    }
                }

                engine.bullets.forEach { bullet ->
                    drawCircle(
                        color = Color(0xFF7BDFF2),
                        radius = 8f,
                        center = Offset(bullet.x, bullet.y)
                    )
                }
            }

            if (engine.gameOver) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = "Game Over 😿",
                        color = Color.White,
                        style = MaterialTheme.typography.headlineMedium,
                        fontWeight = FontWeight.ExtraBold
                    )
                    Button(onClick = { engine.reset() }, modifier = Modifier.padding(top = 12.dp)) {
                        Text("Reintentar")
                    }
                }
            }
        }

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp),
            horizontalArrangement = Arrangement.Center
        ) {
            Button(onClick = { engine.shoot(height) }, modifier = Modifier.size(width = 200.dp, height = 56.dp)) {
                Text("Disparar hilo 🧶")
            }
        }
    }
}
