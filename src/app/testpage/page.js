"use client";
import Image from "next/image";
import Link from "next/link";
import GridComponent from "../components/grid/GridComponent";
import { mediaAtom } from "../atomStore";
import { useAtom } from "jotai";

export default function Test() {
  const [media, setMedia] = useAtom(mediaAtom);

  return (
    <div>
        <GridComponent media={media} />
    </div>
  );
}
