package com.example.catinvaders.game

import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.runtime.snapshots.SnapshotStateObserver
import org.junit.Assert.*
import org.junit.Test

class GameEngineTest {
    @Test fun movementInvalidatesObservedCoordinatesWithoutChangingHudOrLists() {
        val engine = GameEngine()
        engine.bullets.add(Bullet(1000f, 1000f))
        val cat = engine.cats.first()
        val bullet = engine.bullets.first()
        val observer = SnapshotStateObserver { it() }
        var invalidations = 0
        observer.start()
        try {
            observer.observeReads(Any(), { _: Any -> invalidations++ }) {
                cat.x; cat.y; cat.alive; bullet.x; bullet.y; bullet.active
            }
            engine.update(1080f, 1920f)
            Snapshot.sendApplyNotifications()
            assertTrue(invalidations > 0)
            assertEquals(124f, cat.x, 0f)
            assertEquals(975f, bullet.y, 0f)
            assertEquals(0, engine.score)
            assertEquals(3, engine.lives)
            assertEquals(18, engine.cats.size)
            assertEquals(1, engine.bullets.size)
        } finally {
            observer.stop()
            observer.clear()
        }
    }

    @Test fun clearingTwoWavesPreservesProgressAndRemovesOldShots() {
        val engine = GameEngine()
        engine.score = 180
        engine.lives = 2
        engine.playerX = 350f
        repeat(2) {
            engine.cats.forEach { it.alive = false }
            engine.bullets.add(Bullet(1000f, 1000f))
            engine.update(1080f, 1920f)
            assertEquals(180, engine.score)
            assertEquals(2, engine.lives)
            assertEquals(350f, engine.playerX, 0f)
            assertFalse(engine.gameOver)
            assertTrue(engine.bullets.isEmpty())
            assertEquals(18, engine.cats.count { it.alive })
            assertEquals(120f, engine.cats.first().x, 0f)
        }
    }

    @Test fun lastHitScoresOnceAndNextTickStartsWave() {
        val engine = GameEngine()
        engine.cats.clear()
        engine.cats.add(EnemyCat(120f, 120f))
        engine.bullets.add(Bullet(124f, 145f))
        engine.lives = 2
        engine.update(1080f, 1920f)
        assertEquals(10, engine.score)
        assertFalse(engine.cats.single().alive)
        assertTrue(engine.bullets.isEmpty())
        engine.update(1080f, 1920f)
        assertEquals(10, engine.score)
        assertEquals(2, engine.lives)
        assertEquals(18, engine.cats.count { it.alive })
        engine.update(1080f, 1920f)
        assertEquals(10, engine.score)
    }

    @Test fun gameOverFreezesPlayAndResetStartsFreshGame() {
        val engine = GameEngine()
        engine.score = 90
        engine.lives = 0
        engine.gameOver = true
        engine.cats.forEach { it.alive = false }
        engine.shoot(1920f)
        engine.update(1080f, 1920f)
        assertTrue(engine.bullets.isEmpty())
        assertEquals(90, engine.score)
        assertEquals(0, engine.cats.count { it.alive })
        engine.reset()
        assertEquals(0, engine.score)
        assertEquals(3, engine.lives)
        assertFalse(engine.gameOver)
        assertEquals(500f, engine.playerX, 0f)
        assertEquals(18, engine.cats.count { it.alive })
        engine.shoot(1920f)
        assertEquals(1, engine.bullets.size)
    }

    @Test fun offscreenBulletIsRemoved() {
        val engine = GameEngine()
        engine.bullets.add(Bullet(1000f, 10f))
        engine.update(1080f, 1920f)
        assertTrue(engine.bullets.isEmpty())
    }
}
