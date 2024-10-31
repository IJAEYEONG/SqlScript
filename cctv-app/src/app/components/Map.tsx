"use client"; // 이 줄을 추가해 클라이언트 컴포넌트로 지정합니다.

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=16b3a7b4398de3880caf53084dc04ef5&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const positions = [
          {
            title: "CCTV 1",
            latlng: new window.kakao.maps.LatLng(37.5665, 126.978),
          },
          {
            title: "CCTV 2",
            latlng: new window.kakao.maps.LatLng(37.5651, 126.9895),
          },
          {
            title: "CCTV 3",
            latlng: new window.kakao.maps.LatLng(37.5641, 126.975),
          },
        ];

        positions.forEach((position) => {
          new window.kakao.maps.Marker({
            map,
            position: position.latlng,
            title: position.title,
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default Map;
