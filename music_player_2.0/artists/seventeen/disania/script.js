document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");
    const progressBar = document.getElementById("progress-bar");
    const moveToBeginningButton = document.getElementById("move-to-0-button");
    const moveToEndButton = document.getElementById("move-to-100-button");
    const timer = document.getElementById('timer');

    // Set the total duration of the audio (in seconds)
    const totalDuration = 145;

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
        playPauseButton.textContent = "❚❚";
    }

    function pauseAudio() {
        audioPlayer.pause();
        playPauseButton.textContent = "▶";
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


document.addEventListener('DOMContentLoaded', function() {
  const lyricsContainer = document.getElementById('lyric-card');
  const audio = document.getElementById('audio-player');

  // Replace this with your JSON data of lyrics with start and end timecodes
  const lyricsData = [
    { start: 12, end: 14, text: 'kayyo'},
    { start: 14, end: 16, text: 'Э-Э-Э-Эти таблетки меня не спасают'},
    { start: 16, end: 18, text: 'Не очень здоровье — звоню своей маме'},
    { start: 18, end: 19, text: 'Я не хочу, чтобы ты не узнала'},
    { start: 19, end: 22, text: 'Я не хочу, чтобы ты не узнала меня'},
    { start: 22, end: 23, text: 'Ко-Когда-нибудь позже'},
    { start: 23, end: 25, text: 'Не хочу думать, это пиздец сложно'},
    { start: 25, end: 28, text: 'Не хочу слушать, не хочу слушать тебя'},
    { start: 28, end: 32, text: 'Не хочу смотреть назад, твои слёзы — звездопад'},
    { start: 32, end: 36, text: 'Её руки тянутся, чтобы разбудить меня'},
    { start: 36, end: 38, text: 'Зовёт назад, зовёт назад'},
    { start: 38, end: 42, text: 'А-а'},
    { start: 42, end: 46, text: 'А-я, просыпайся, я не хочу открывать глаза'},
    { start: 46, end: 50, text: 'Плохая сказка, у которой не будет конца'},
    { start: 50, end: 54, text: 'Всё не важно, если рядом не будет тебя, эй'},
    { start: 54, end: 57, text: 'Если рядом не будет тебя'},
    { start: 57, end: 61, text: 'Эй, пару минут, такси подождём, ты немного замёрзла'},
    { start: 61, end: 65, text: 'Мы под дождём с тобой без зонтов, сегодня так можно'},
    { start: 65, end: 68, text: 'Или нельзя, не хочу знать и быть осторожным'},
    { start: 68, end: 73, text: 'Сегодня всё можно, сегодня всё можно'},
    { start: 73, end: 76, text: 'Как тебя я не узнал?'},
    { start: 76, end: 80, text: 'Скоро время просыпаться'},
    { start: 80, end: 83, text: 'По-другому тут нельзя'},
    { start: 83, end: 85, text: 'Нельзя, пока'},
    { start: 85, end: 89, text: 'Просыпайся, я не хочу открывать глаза'},
    { start: 89, end: 92, text: 'Плохая сказка, у которой не будет конца'},
    { start: 92, end: 97, text: 'Всё не важно, если рядом не будет тебя, эй'},
    { start: 97, end: 101, text: 'Если рядом не будет тебя'},
    { start: 101, end: 112, text: 'Если рядом не будет тебя'},
    { start: 112, end: 116, text: 'Если рядом не будет тебя'},
    { start: 116, end: 10000, text: 'Если рядом не будет тебя'}

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