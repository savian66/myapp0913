"use client";

import {
  // CSSProperties, // 移除此行
  ReactElement,
  ReactNode,
  //useEffect,
  // useRef, // 移除此行
  //useState,
} from "react";

// import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   **/
  as?: ReactElement;
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string;

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   * */
  children?: ReactNode;

  /**
   * @default 5
   * @type number
   * @description
   * The size of the border in pixels
   * */
  borderSize?: number;

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   * */
  borderRadius?: number;

  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors?: NeonColorsProps;

  [key: string]: unknown; // 将 any 替换为 unknown
}

export const NeonGradientCard = ({ children, className }: NeonGradientCardProps) => { // 添加 NeonGradientCardProps 类型
  return (
    <div className={`neon-gradient-card ${className}`}>
      {children}
    </div>
  );
};
