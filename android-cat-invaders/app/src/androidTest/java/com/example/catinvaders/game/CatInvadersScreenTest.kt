package com.example.catinvaders.game

import androidx.compose.ui.graphics.toPixelMap
import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createComposeRule
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test

class CatInvadersScreenTest {
    @get:Rule val compose = createComposeRule()

    @Test fun canvasRedrawsMovingCatAndBulletWithoutHudChanges() {
        val engine = GameEngine()
        engine.cats.clear()
        val cat = EnemyCat(120f, 120f)
        val bullet = Bullet(220f, 240f)
        engine.cats.add(cat)
        engine.bullets.add(bullet)
        compose.setContent { CatInvadersScreen(engine, runGameLoop = false) }
        val canvas = compose.onNodeWithTag("game-canvas")
        val before = canvas.captureToImage().toPixelMap()
        compose.runOnIdle { cat.x += 80f }
        val afterCat = canvas.captureToImage().toPixelMap()
        assertNotEquals(before[120, 120], afterCat[120, 120])
        compose.runOnIdle { bullet.y -= 80f }
        val afterBullet = canvas.captureToImage().toPixelMap()
        assertNotEquals(afterCat[220, 240], afterBullet[220, 240])
        compose.onNodeWithText("Puntaje: 0").assertExists()
        compose.onNodeWithText("Vidas: 3").assertExists()
    }

    @Test fun waveKeepsHudAndRetryResetsItThenAllowsShooting() {
        val engine = GameEngine()
        engine.score = 180
        engine.lives = 2
        compose.setContent { CatInvadersScreen(engine, runGameLoop = false) }
        compose.runOnIdle {
            engine.cats.forEach { it.alive = false }
            engine.update(1080f, 1920f)
        }
        compose.onNodeWithText("Puntaje: 180").assertExists()
        compose.onNodeWithText("Vidas: 2").assertExists()
        compose.onNodeWithText("Reintentar").assertDoesNotExist()
        compose.runOnIdle { engine.lives = 0; engine.gameOver = true }
        compose.onNodeWithText("Reintentar").performClick()
        compose.onNodeWithText("Puntaje: 0").assertExists()
        compose.onNodeWithText("Vidas: 3").assertExists()
        compose.onNodeWithText("Reintentar").assertDoesNotExist()
        compose.onNodeWithText("Disparar hilo 🧶").performClick()
        compose.runOnIdle { assertEquals(1, engine.bullets.size) }
    }
}
