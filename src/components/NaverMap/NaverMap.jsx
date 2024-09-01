import { useState } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
} from 'react-naver-maps';

import { center, level, markers as markerInfos } from '@/constants';

export default function NaverMapWithMarker({
  setFocusedMarker,
  setIsBottomSheetOpen,
}) {
  const [markers, setMarkers] = useState(markerInfos);
  const handleMarkerClick = (index) => {
    const updatedMarkers = markerInfos.map((marker, i) => ({
      ...marker,
      size: i === index ? { width: 90, height: 123 } : marker.size,
      url: i === index ? '/select_marker.svg' : marker.url,
      amount: i === index ? '' : marker.amount,
    }));
    setMarkers(updatedMarkers);
    setFocusedMarker(markerInfos[index]);
    setIsBottomSheetOpen(true);
  };

  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <MapDiv style={{ width: '100%', height: '100vh' }}>
        <NaverMap
          defaultCenter={{ lat: center.lat, lng: center.lng }}
          defaultZoom={level}
        >
          {markers.map((marker, index) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={(event) => {
                event.originalEvent.stopPropagation();
                handleMarkerClick(index);
              }}
              icon={
                marker.amount === 0
                  ? {
                      content: `<div name='marker' style="display: flex; justify-content: center; align-items: center; width: ${marker.size.width}px; height: ${marker.size.height}px; background:  url(${marker.url}) no-repeat center/cover;"><span style="color: #92A5B3; font-weight:700; transform: translateY(-5px);">${marker.amount}</span></div>`,
                      size: marker.size,
                    }
                  : {
                      content: `<div name='marker' style="display: flex; justify-content: center; align-items: center; width: ${marker.size.width}px; height: ${marker.size.height}px; background:  url(${marker.url}) no-repeat center/cover;"><span style="color: white; font-weight:700; transform: translateY(-5px);">${marker.amount}</span></div>`,
                      size: marker.size,
                    }
              }
            />
          ))}
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
}
