<?php
require_once('header.php'); ?>

<div class="container">
      <h1>Online Tasbih Counter</h1>
      <div class="tasbih-container">
            <div class="display" id="counter"></div>
            <div class="buttons">
                  <button id="decrement" class="btn">-</button>
                  <button id="reset" class="btn" onclick="return confirm('Are you sure you want to reset?')">↻</button>
            </div>
            <button id="increment" class="btn large-btn round-btn">TAP</button>
      </div>
</div>

<?php require_once('footer.php'); ?>