import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TooltipBaseType } from "../Tooltip.type";
import { ReactComponent as TooltipIcon } from "../../../../assets/img/icon/tooltipIcon.svg";
import style from "./TooltipBase.module.css";
import { MatchMediaWrapper } from "../../../MatchMedia/MatchMediaWrapper";
import useOnClickOutside from "../../useOnClickOutside";

const TooltipBase: React.FC<TooltipBaseType> = ({
  children,
}: TooltipBaseType) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const targetElementRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(targetElementRef, () => setOpenTooltip(false));
  // Desktop Position
  const offsetTop = -18;
  const offsetLeft = 40;
  const positionD = targetElementRef.current?.getBoundingClientRect();
  const cssDesktop = {
    bottom: Number(positionD?.y) + window.pageYOffset + "px",
    left: Number(positionD?.x) + window.pageXOffset + offsetLeft + "px",
    top: Number(positionD?.y) + window.pageYOffset + offsetTop + "px",
    right: Number(positionD?.x) + window.pageXOffset + "px",
  };
  // Mobile Position
  const offsetTopM = 10;
  const offsetLeftM = -300;
  const positionM = targetElementRef.current?.getBoundingClientRect();
  const cssMobile = {
    bottom: Number(positionM?.y) + window.pageYOffset + "px",
    left: Number(positionM?.x) + window.pageXOffset + offsetLeftM + "px",
    top: Number(positionM?.y) + window.pageYOffset + offsetTopM + "px",
    right: Number(positionM?.x) + window.pageXOffset + "px",
  };

  const desktopContent = (
    <div>
      <div
        className={style.tooltipIconContainer}
        ref={targetElementRef}
        onMouseOver={() => setOpenTooltip(true)}
        onMouseOut={() => setOpenTooltip(false)}
      >
        <TooltipIcon />
      </div>
      {openTooltip &&
        createPortal(
          <div className={style.containerTooltip} style={cssDesktop}>
            <div className={style.wrapper}>
              <p className={style.text}>{children}</p>
            </div>
          </div>,
          document.getElementById("tooltip")!
        )}
    </div>
  );

  const mobileContent = (
    <div>
      <div
        className={style.tooltipIconContainer}
        ref={targetElementRef}
        onClick={() => setOpenTooltip(true)}
      >
        <TooltipIcon />
      </div>
      {openTooltip &&
        createPortal(
          <div className={style.containerTooltipMobile} style={cssMobile}>
            <div className={style.wrapper}>
              <p className={style.text}>{children}</p>
            </div>
          </div>,
          document.getElementById("tooltip")!
        )}
    </div>
  );

  return (
    <MatchMediaWrapper
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default TooltipBase;
