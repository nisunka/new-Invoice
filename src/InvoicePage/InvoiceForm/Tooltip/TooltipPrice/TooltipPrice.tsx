import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TooltipBaseType } from "../Tooltip.type";
import { ReactComponent as TooltipIcon } from "../../../../assets/img/icon/tooltipIcon.svg";
import style from "./TooltipPrice.module.css";

const Tooltip: React.FC<TooltipBaseType> = ({ children }: TooltipBaseType) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const offsetTop = -55;
  const offsetLeft = 40;
  const targetElementRef = useRef<HTMLDivElement>(null);
  const position = targetElementRef.current?.getBoundingClientRect();
  const css = {
    bottom: Number(position?.y) + window.pageYOffset + "px",
    left: Number(position?.x) + window.pageXOffset + offsetLeft + "px",
    top: Number(position?.y) + window.pageYOffset + offsetTop + "px",
    right: Number(position?.x) + window.pageXOffset + "px",
  };

  return (
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
          <div className={style.containerTooltip} style={css}>
            <div className={style.wrapper}>
              <p className={style.text}>{children}</p>
            </div>
          </div>,
          document.getElementById("tooltip")!
        )}
    </div>
  );
};

export default Tooltip;
