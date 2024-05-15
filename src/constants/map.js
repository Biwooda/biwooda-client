const level = 18;
const center = { lat: 37.545289, lng: 126.964415 };
const markers = [
  {
    id: 1,
    label: '명신관',
    lat: 37.545952,
    lng: 126.963694,
    amount: 5,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
  {
    id: 2,
    label: '새힘관',
    lat: 37.545716,
    lng: 126.963753,
    amount: 7,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
  {
    id: 3,
    label: '순헌관',
    lat: 37.546385,
    lng: 126.964706,
    amount: 1,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
  {
    id: 4,
    label: '학생회관',
    lat: 37.545356,
    lng: 126.964952,
    amount: 0,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
  {
    id: 5,
    label: '행정관',
    lat: 37.54535,
    lng: 126.9645,
    amount: 3,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
  {
    id: 6,
    label: '제2캠퍼스',
    lat: 37.545049,
    lng: 126.964821,
    amount: 9,
    size: { width: 42, height: 52 },
    url: '/marker.svg',
  },
];

export { center, level, markers };
