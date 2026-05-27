document.addEventListener("DOMContentLoaded", function() {
    // Finds elements labeled with .script across any page on your site
    const targets = document.querySelectorAll(".script");

    const mapping = [
        { words: ["DirectShowSource", "ConvertTORGB32", "ImageSource", "framerate", "framecount", "ColorKeyMask", "Overlay", "ShowAlpha", "AVISource", "FFVideoSource", "FFmpegSource", "306B5DB344146623"], class: "hl-func" },
        { words: ['"base_video.webm"', '"luma_key.webm"', '"background.png"', '"foreground.png"', '"RGB32"', '"blend"', "webm", "avi", "mp4", "mkv"], class: "hl-str" },
        { words: ["base_video", "ps2smb", "PS2SMB"], class: "hl-base" },
        { words: ["luma_key", "nvme0n1"], class: "hl-luma" },
        { words: ["background"], class: "hl-bg" },
        { words: ["foreground"], class: "hl-fg" },
        { words: ["maskclip"], class: "hl-mask" },
        { words: ["\\$000000", "\\b0\\b", "\\b1\\b"], class: "hl-num" }
    ];

    //if (window.location.href.includes("ps2smb.html")) {
    //    config.words = config.words.filter(word => word !== "\\b0\\b", "\\b1\\b");
    //}

    targets.forEach(target => {
        let text = target.innerHTML;

        mapping.forEach(item => {
            item.words.forEach(word => {
                const regex = word.startsWith("\\") || word.includes('"') ? new RegExp(word, 'g') : new RegExp(`\\b${word}\\b`, 'g');
                text = text.replace(regex, `<span class="${item.class}">$&</span>`);
            });
        });

        target.innerHTML = text;
    });
});