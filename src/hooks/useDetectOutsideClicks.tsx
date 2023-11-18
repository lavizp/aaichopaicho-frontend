interface IUseDetectOutsideClick {
  ref: React.RefObject<any>;
  callback: Function;
  portalOnly?: boolean;
  exceptRefs?: React.RefObject<any>[];
}

import { useCallback, useEffect } from "react";
const useDetectOutsideClick = ({
  ref,
  callback,
  portalOnly = false,
  exceptRefs,
}: IUseDetectOutsideClick) => {
  const handleCheckExceptRef = (target: HTMLElement) => {
    return exceptRefs?.some(
      (exceptRef) => exceptRef.current && exceptRef.current.contains(target)
    );
  };

  const includesPortal = (
    clickedElement: HTMLElement,
    refElement: HTMLElement
  ) => {
    return clickedElement.contains(refElement);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    event.stopPropagation();

    const target = event.target as HTMLElement;

    // if (
    //     portalOnly &&
    //     ref?.current &&
    //     target.querySelector(`#${MODAL_UNIQUE_ID}`) === ref.current &&
    //     !ref.current.contains(target) &&
    //     !handleCheckExceptRef(target)
    // ) {
    //     callback(event);
    //     return event.stopImmediatePropagation();
    // }

    if (
      ref.current &&
      !ref.current.contains(target) &&
      !handleCheckExceptRef(target)
    ) {
      if (portalOnly && includesPortal(target, ref.current)) {
        callback(event);
        return;
      }

      if (!portalOnly) {
        callback(event);
        return;
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, exceptRefs]);
};

export default useDetectOutsideClick;
