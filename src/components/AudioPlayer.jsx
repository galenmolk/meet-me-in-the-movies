import { useRef, forwardRef, useImperativeHandle } from "react";

const AudioPlayer = forwardRef((props, ref) => {
    const bgMusicRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play() {
            if (bgMusicRef.current) {
                bgMusicRef.current.play();
            }
        },
        pause() {
            if (bgMusicRef.current) {
                bgMusicRef.current.pause();
            }
        }
    }));

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