import React, { RefObject, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as TooltipIcon } from "../../../../assets/img/icon/tooltipIcon.svg";
import style from "./TooltipPrice.module.css";

type Props = {
  children: any;
};

const Tooltip: React.FC<Props> = ({ children }: Props) => {
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

  const portalRef = useRef();
  // if (!portalRef.current) {
  // element = document.createElemet()...
  // document.body.appendChild
  // portalRef.current = element
  // }

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
