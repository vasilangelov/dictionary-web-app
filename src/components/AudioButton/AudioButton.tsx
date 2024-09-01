import { useRef, type FC } from "react";
import IconPlay from "@/assets/icons/icon-play.svg?react";

import audioButtonClasses from "./AudioButton.module.scss";

type AudioButtonProps = {
  src: string;
};

export const AudioButton: FC<AudioButtonProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <button
        type="button"
        className={audioButtonClasses["AudioButton"]}
        onClick={playAudio}
      >
        <IconPlay className={audioButtonClasses["AudioButton__icon"]} />
      </button>

      <audio
        src={src}
        ref={audioRef}
        className={audioButtonClasses["AudioButton__player"]}
        aria-hidden
      />
    </>
  );
};
