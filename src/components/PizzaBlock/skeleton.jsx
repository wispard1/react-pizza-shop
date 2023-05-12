import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="132" cy="124" r="118" />
    <circle cx="127" cy="147" r="10" />
    <circle cx="110" cy="217" r="2" />
    <rect x="0" y="271" rx="6" ry="6" width="273" height="29" />
    <rect x="172" y="286" rx="0" ry="0" width="2" height="2" />
    <rect x="143" y="365" rx="0" ry="0" width="1" height="0" />
    <rect x="1" y="319" rx="10" ry="10" width="275" height="80" />
    <rect x="121" y="421" rx="25" ry="25" width="152" height="45" />
    <rect x="1" y="429" rx="10" ry="10" width="91" height="28" />
  </ContentLoader>
);

export default Skeleton;
