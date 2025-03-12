import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const AudioPlayer = forwardRef((props, ref) => {
    const bgMusicRef = useRef(null);

    const playMusic = () => {
        if (bgMusicRef.current) {
            bgMusicRef.current.play();
        }
    };

    const pauseMusic = () => {
        if (bgMusicRef.current) {
            bgMusicRef.current.pause();
        }
    };

    useImperativeHandle(ref, () => ({
        play() {
            playMusic();
        },
        pause() {
            pauseMusic();
        }
    }));

    useEffect(() => {
        window.addEventListener('blur', pauseMusic);
        window.addEventListener('focus', playMusic); 

        return () => {
            window.removeEventListener('blur', pauseMusic);
            window.removeEventListener('focus', playMusic); 
        };
    }, []);

    return (
        <>
            <audio ref={bgMusicRef} preload="auto" loop>
                <source src="./cm5lxjx43000008l76lqkck98.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </>
    )
});

export default AudioPlayer;