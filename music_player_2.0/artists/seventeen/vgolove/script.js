document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 122;

    function updateTimer() {
        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60);
        const formattedTime = padZero(minutes) + ':' + padZero(seconds);
        timer.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    audioPlayer.addEventListener('timeupdate', updateTimer);

    // Event listener for play/pause button
    playPauseButton.addEventListener("click", function () {
        togglePlayPause();
    });

    // Event listener for updating the progress bar
    audioPlayer.addEventListener("timeupdate", function () {
        updateProgressBar();
    });

    // Event listener for progress bar input
    progressBar.addEventListener("input", function () {
        seekAudio();
    });

    // Event listener for move to beginning button
    moveToBeginningButton.addEventListener("click", function () {
        moveAudioToBeginning();
    });

    // Event listener for move to end button
    moveToEndButton.addEventListener("click", function () {
        moveAudioToEnd();
    });

    // Set the maximum value for the progress bar
    progressBar.max = totalDuration;

    function togglePlayPause() {
        if (audioPlayer.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    }

    function playAudio() {
        audioPlayer.play();
    }

    function pauseAudio() {
        audioPlayer.pause();
    }


    function updateProgressBar() {
        const currentTime = audioPlayer.currentTime;
        progressBar.value = currentTime;
    }

    function seekAudio() {
        audioPlayer.currentTime = progressBar.value;
        updateProgressBar();
    }

    function moveAudioToBeginning() {
        audioPlayer.currentTime = 0;
        updateProgressBar();
    }

    function moveAudioToEnd() {
        audioPlayer.currentTime = audioPlayer.duration;
        updateProgressBar();
    }
});

let isPaused = false;

    function togglePause() {
      isPaused = !isPaused;

      const toggleIcon = document.getElementById('pause-button-img');

      if (isPaused) {
        toggleIcon.src = 'data/pause.svg';
        toggleIcon.alt = 'Pause';
      } else {
        toggleIcon.src = 'data/play.svg';
        toggleIcon.alt = 'Play';
      }
    }


document.addEventListener('DOMContentLoaded', function() {
  const lyricsContainer = document.getElementById('lyric-card');
  const audio = document.getElementById('audio-player');

  // Replace this with your JSON data of lyrics with start and end timecodes
  const lyricsData = [
    { start: 5, end: 10, text: 'SEVENTEEN'},
    { start: 10, end: 13, text: 'Будто в первый раз я открыл глаза'},
    { start: 13, end: 15, text: 'Не буду снова спать, я прошу меня забрать'},
    { start: 15, end: 18, text: 'Кого-то в темноте, он устал со мной играть'},
    { start: 18, end: 21, text: 'Пой мне эти песни, согревай мою кровать'},
    { start: 21, end: 24, text: 'Рисую в голове, а, будто бы в тетрадь (А-А-А)'},
    { start: 24, end: 26, text: 'Холодный, как зима, я выхожу тебя искать (А-А)'},
    { start: 26, end: 29, text: 'Ветер обнимает, не даёт мне снова спать'},
    { start: 29, end: 32, text: 'Мои стены плачут кровью, её слезы на кровать'},
    { start: 32, end: 34, text: 'Рисую в голове, а, будто бы в тетрадь (А-А-А)'},
    { start: 34, end: 37, text: 'Холодный, как зима, я выхожу тебя искать (А-А)'},
    { start: 37, end: 40, text: 'Ветер обнимает, не даёт мне снова спать'},
    { start: 40, end: 43, text: 'Мои стены плачут кровью, её слезы на кровать'},
    { start: 43, end: 45, text: 'Я искал так долго, но не смог их всех найти'},
    { start: 45, end: 48, text: 'Кто заменит воздух прямо мне до боли там в груди?'},
    { start: 48, end: 51, text: 'Мне не нужно быть спокойней, знаю, меня не спасти (Прости)'},
    { start: 51, end: 54, text: 'Я слышу этот грохот, грохот моей головы'},
    { start: 54, end: 56, text: 'Я знаю вашу тайну, но не смог бы рассказать'},
    { start: 56, end: 59, text: 'Все те мысли потерялись, лучше-ше-ше не дышать'},
    { start: 59, end: 62, text: 'Я не вижу здесь свободу, свет потухшей души'},
    { start: 62, end: 63, text: 'Сделать все чтоб не проснуться здесь'},
    { start: 63, end: 66, text: 'И всё, что можешь ты'},
    { start: 66, end: 71, text: 'К нам пришла зима'},
    { start: 71, end: 87, text: 'К нам пришла зима-а-а-а-а-а'},
    { start: 87, end: 89, text: 'Рисую в голове, а, будто бы в тетрадь (А-А-А)'},
    { start: 89, end: 92, text: 'Холодный, как зима, я выхожу тебя искать (А-А)'},
    { start: 92, end: 94, text: 'Ветер обнимает, не даёт мне снова спать'},
    { start: 94, end: 97, text: 'Мои стены плачут кровью, её слезы на кровать'},
    { start: 97, end: 100, text: 'Рисую в голове, а, будто бы в тетрадь (А-А-А)'},
    { start: 100, end: 103, text: 'Холодный, как зима, я выхожу тебя искать (А-А)'},
    { start: 103, end: 106, text: 'Ветер обнимает, не даёт мне снова спать'},
    { start: 106, end: 10000, text: 'Мои стены плачут кровью, её слезы на кровать'},
  ];

   // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function to display lyrics
  function displayLyrics() {
    lyricsContainer.innerHTML = '';
    lyricsData.forEach(line => {
      const lyricLine = document.createElement('div');
      lyricLine.classList.add('lyrics-line');
      lyricLine.textContent = line.text;
      lyricsContainer.appendChild(lyricLine);

      // Highlight active line based on current audio time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= line.start && audio.currentTime <= line.end) {
          lyricLine.classList.add('active');
          scrollToLyric(lyricLine.offsetTop);
        } else {
          lyricLine.classList.remove('active');
        }
      });
    });
  }

  // Function for smooth scrolling to lyric line
  function scrollToLyric(offsetTop) {
    lyricsContainer.scrollTo({
      top: offsetTop - (lyricsContainer.clientHeight / 4),
      behavior: 'smooth'
    });
  }

  displayLyrics();
});