import ICON_SVG from 'assets/Icon/icon.svg';

export default function Icon({ id, fill, stroke, ...props }) {
  return (
    <svg {...props}>
      <use href={`${ICON_SVG}#${id}`} fill={fill} stroke={stroke} />
    </svg>
  );
}
