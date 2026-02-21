package com.example.catinvaders

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.remember
import com.example.catinvaders.game.CatInvadersScreen
import com.example.catinvaders.game.GameEngine

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val engine = remember { GameEngine() }
            CatInvadersScreen(engine = engine)
        }
    }
}
