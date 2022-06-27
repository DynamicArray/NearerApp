import React from 'react';
import Svg, {Path, Polygon} from 'react-native-svg';

const IconBars = ({color = '#fff'}) => {
  return (
    <Svg
      style={{color: color, marginLeft: 'auto'}}
      height="15"
      width="15"
      viewBox="0 0 448 512">
      <Path
        fill="currentColor"
        d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
      />
    </Svg>
  );
};

const IconCompass = ({color = '#fff'}) => {
  return (
    <Svg style={{color: color}} height="50%" width="25%" viewBox="0 0 496 512">
      <Path
        fill="currentColor"
        d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"
      />
    </Svg>
  );
};

const IconHome = ({color = '#fff'}) => {
  return (
    <Svg style={{color: color}} height="50%" width="25%" viewBox="0 0 576 512">
      <Path
        fill="currentColor"
        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
      />
    </Svg>
  );
};

const IconInfo = ({color = '#fff'}) => {
  return (
    <Svg style={{color: color}} height="50%" width="25%" viewBox="0 0 512 512">
      <Path
        fill="currentColor"
        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
      />
    </Svg>
  );
};

const IconNearer = () => {
  return (
    <Svg
      viewBox="0 0 341 85"
      width="90%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{marginLeft: '5%'}}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M129.767 61.6642C129.537 61.6642 129.337 61.4617 129.337 61.2318V38.2372C129.337 34.8157 128.236 31.9206 126.037 29.552C123.838 27.1834 121.022 25.9991 117.59 25.9991C114.16 25.9991 111.344 27.1715 109.143 29.5192C106.943 31.8659 105.844 34.7719 105.844 38.2372V61.2318C105.844 61.4617 105.643 61.6642 105.414 61.6642H99.563C99.334 61.6642 99.1323 61.4617 99.1323 61.2318V20.9015C99.1323 20.6724 99.334 20.4717 99.563 20.4717H105.414C105.643 20.4717 105.844 20.6724 105.844 20.9015V24.7482C108.042 23.0374 109.962 21.8504 111.588 21.1934C113.564 20.3193 115.764 19.8796 118.177 19.8796C123.1 19.8796 127.277 21.6451 130.707 25.1761C134.137 28.708 135.851 32.9516 135.851 37.9088V61.2318C135.851 61.4617 135.65 61.6642 135.421 61.6642H129.767Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M152.482 30.4069C149.345 33.3467 147.798 36.9215 147.843 41.1323C147.887 45.2555 149.368 48.7655 152.285 51.6615C155.202 54.5575 158.723 56.0046 162.846 56.0046C166.356 56.0046 169.69 55.3458 172.849 54.031C176.271 52.5639 178.537 50.6241 179.652 48.2153C179.794 47.9069 180.099 47.8504 180.342 48.0867L184.064 51.6962C184.173 51.8029 184.214 52.083 184.14 52.2144C182.333 55.4507 179.512 57.9425 175.679 59.6889C172.081 61.3996 168.089 62.2546 163.702 62.2546C157.559 62.2546 152.307 60.2263 147.941 56.1679C143.577 52.1104 141.394 47.0995 141.394 41.1323C141.394 35.2108 143.588 30.188 147.974 26.0639C152.361 21.9416 157.603 19.8796 163.702 19.8796C170.283 19.9234 175.437 21.4142 179.166 24.3531C183.598 27.8184 185.812 33.1934 185.812 40.4745C185.812 41.2263 185.796 42.0091 185.765 42.8248C185.755 43.042 185.551 43.2381 185.333 43.2381H154.589C154.361 43.2381 154.16 43.0374 154.16 42.8084V38.4051C154.16 38.1761 154.361 37.9745 154.589 37.9745H178.506C178.52 37.9526 178.542 37.9106 178.55 37.886C177.322 29.9462 172.387 25.9991 163.701 25.9991C159.359 25.9991 155.619 27.4681 152.482 30.4069Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M212.039 26.3932C207.828 26.3932 204.252 27.7974 201.313 30.6049C198.372 33.4124 196.904 36.9005 196.904 41.0675C196.904 45.2345 198.351 48.7117 201.247 51.4973C203.791 53.9434 206.825 55.3157 210.349 55.6131C210.552 55.6314 210.745 55.8385 210.745 56.042V61.4672C210.745 61.7126 210.537 61.9097 210.294 61.8969C204.893 61.6396 200.244 59.6396 196.346 55.9069C192.156 51.8923 190.061 46.9462 190.061 41.0684C190.061 37.7345 190.828 34.5538 192.364 31.5274C194.207 28.0173 196.794 25.2984 200.129 23.3686C203.463 21.437 207.148 20.4726 211.183 20.4726H227.139C227.368 20.4726 227.569 20.6734 227.569 20.9024V61.2336C227.569 61.4635 227.368 61.6642 227.139 61.6642H221.616C221.387 61.6642 221.185 61.4635 221.185 61.2336V26.3932H212.039Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M242.162 38.2372V61.2318C242.162 61.4617 241.961 61.6642 241.732 61.6642H235.88C235.651 61.6642 235.45 61.4617 235.45 61.2318V20.9015C235.45 20.6724 235.651 20.4708 235.88 20.4708H241.732C241.961 20.4708 242.162 20.6724 242.162 20.9015V24.7482C244.361 23.0374 246.282 21.8504 247.909 21.1925C249.885 20.3184 252.086 19.8796 254.499 19.8796C258.168 19.8796 261.399 20.8239 264.193 22.7162C264.467 22.8996 264.478 23.2044 264.222 23.4088C263.701 23.8248 263.188 24.2673 262.69 24.7372C261.8 25.573 260.999 26.4462 260.291 27.3568C260.177 27.5037 259.899 27.5584 259.736 27.4653C258.035 26.4881 256.09 25.9991 253.906 25.9991C250.52 25.9991 247.714 27.1715 245.494 29.5182C243.273 31.8659 242.162 34.7719 242.162 38.2372Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M269.392 30.4069C266.255 33.3467 264.708 36.9215 264.754 41.1323C264.797 45.2555 266.277 48.7655 269.193 51.6615C272.11 54.5575 275.633 56.0046 279.755 56.0046C283.265 56.0046 286.599 55.3458 289.758 54.031C293.18 52.5639 295.449 50.6241 296.562 48.2153C296.705 47.9069 297.008 47.8504 297.252 48.0867L300.973 51.6962C301.083 51.8029 301.124 52.083 301.049 52.2144C299.244 55.4507 296.422 57.9425 292.589 59.6889C288.991 61.3996 284.999 62.2546 280.612 62.2546C274.471 62.2546 269.218 60.2263 264.851 56.1679C260.487 52.1104 258.305 47.0995 258.305 41.1323C258.305 35.2108 260.498 30.188 264.886 26.0639C269.271 21.9416 274.514 19.8796 280.612 19.8796C287.193 19.9234 292.346 21.4142 296.076 24.3531C300.506 27.8184 302.721 33.1934 302.721 40.4745C302.721 41.2263 302.705 42.0091 302.673 42.8248C302.666 43.042 302.461 43.2381 302.244 43.2381H271.5C271.272 43.2381 271.07 43.0374 271.07 42.8084V38.4051C271.07 38.1761 271.272 37.9745 271.5 37.9745H295.418C295.431 37.9526 295.453 37.9106 295.461 37.886C294.234 29.9462 289.297 25.9991 280.612 25.9991C276.268 25.9991 272.528 27.4681 269.392 30.4069Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M314.829 38.2372V61.2318C314.829 61.4617 314.627 61.6642 314.397 61.6642H308.547C308.317 61.6642 308.116 61.4617 308.116 61.2318V20.9015C308.116 20.6724 308.317 20.4708 308.547 20.4708H314.397C314.627 20.4708 314.829 20.6724 314.829 20.9015V24.7482C317.027 23.0374 318.948 21.8504 320.575 21.1925C322.551 20.3184 324.752 19.8796 327.165 19.8796C332.575 19.8796 337.036 21.9361 340.549 26.0529C340.742 26.2783 340.689 26.5675 340.429 26.7099L335.373 29.4599C335.24 29.531 334.963 29.4891 334.859 29.3832C332.653 27.1277 329.892 25.9991 326.573 25.9991C323.185 25.9991 320.383 27.1715 318.16 29.5182C315.939 31.8659 314.829 34.7719 314.829 38.2372Z"
        fill="#CD3144"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71 40C71 23.4315 57.5685 10 41 10C24.4315 10 11 23.4315 11 40C11 56.5685 24.4315 70 41 70C57.5685 70 71 56.5685 71 40ZM16 40C16 26.1929 27.1929 15 41 15C54.8071 15 66 26.1929 66 40C66 53.8071 54.8071 65 41 65C27.1929 65 16 53.8071 16 40Z"
        fill="#BBBBBB"
      />
      <Path
        d="M54.7678 45.2322L70.7678 61.2322L67.2322 64.7678L51.2322 48.7678L54.7678 45.2322Z"
        fill="white"
      />
      <Path
        d="M50.7678 49.2322L66.7678 65.2322L63.2322 68.7678L47.2322 52.7678L50.7678 49.2322Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M61 40C61 28.9543 52.0457 20 41 20C29.9543 20 21 28.9543 21 40C21 51.0457 29.9543 60 41 60C52.0457 60 61 51.0457 61 40ZM26 40C26 31.7157 32.7157 25 41 25C49.2843 25 56 31.7157 56 40C56 48.2843 49.2843 55 41 55C32.7157 55 26 48.2843 26 40Z"
        fill="#CD3144"
      />
      <Path
        d="M54.7678 49.2322L70.7678 65.2322L67.2322 68.7678L51.2322 52.7678L54.7678 49.2322Z"
        fill="#CD3144"
      />
    </Svg>
  );
};

const IconOpen = () => {
  return (
    <Svg height="75%" width="75%" viewBox="0 0 16 16">
      <Path
        fill="#fff"
        d="M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S12.4,16,8,16z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6 S11.3,2,8,2z"
      />
      <Polygon fill="#fff" points="11,9 7,9 7,4 9,4 9,7 11,7" />
    </Svg>
  );
};

const IconSearch = ({color = '#fff'}) => {
  return (
    <Svg style={{color: color}} height="50%" width="25%" viewBox="0 0 512 512">
      <Path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      />
    </Svg>
  );
};

const IconLocation = () => {
  return (
    <Svg height="75%" width="75%" viewBox="0 0 16 20">
      <Path
        d="M3.05051 3.05036L3.75758 3.7575L3.75761 3.75746L3.05051 3.05036ZM12.9505 12.9504L13.6576 13.6575L12.9505 12.9504ZM8.0005 17.9004L7.2934 18.6075L8.0005 19.3146L8.70761 18.6075L8.0005 17.9004ZM3.05051 12.9504L3.75761 12.2433L3.75758 12.2432L3.05051 12.9504ZM3.75761 3.75746C6.1009 1.41418 9.90011 1.41418 12.2434 3.75746L13.6576 2.34325C10.5333 -0.781083 5.46773 -0.781083 2.3434 2.34325L3.75761 3.75746ZM12.2434 3.75746C14.5867 6.10075 14.5867 9.89997 12.2434 12.2433L13.6576 13.6575C16.7819 10.5331 16.7819 5.46758 13.6576 2.34325L12.2434 3.75746ZM12.2434 12.2433L7.2934 17.1932L8.70761 18.6075L13.6576 13.6575L12.2434 12.2433ZM8.70761 17.1932L3.75761 12.2433L2.3434 13.6575L7.2934 18.6075L8.70761 17.1932ZM3.75758 12.2432C2.63223 11.118 2 9.59176 2 8.00036H0C0 10.1222 0.842967 12.1572 2.34343 13.6575L3.75758 12.2432ZM2 8.00036C2 6.40895 2.63223 4.88274 3.75758 3.7575L2.34343 2.34321C0.842967 3.84353 0 5.87848 0 8.00036H2ZM8.0005 11.0004C9.65736 11.0004 11.0005 9.65721 11.0005 8.00036H9.00051C9.00051 8.55264 8.55279 9.00036 8.0005 9.00036V11.0004ZM11.0005 8.00036C11.0005 6.3435 9.65736 5.00036 8.0005 5.00036V7.00036C8.55279 7.00036 9.00051 7.44807 9.00051 8.00036H11.0005ZM8.0005 5.00036C6.34365 5.00036 5.0005 6.3435 5.0005 8.00036H7.0005C7.0005 7.44807 7.44822 7.00036 8.0005 7.00036V5.00036ZM5.0005 8.00036C5.0005 9.65721 6.34365 11.0004 8.0005 11.0004V9.00036C7.44822 9.00036 7.0005 8.55264 7.0005 8.00036H5.0005Z"
        fill="#CD3144"
      />
    </Svg>
  );
};

const IconPhone = () => {
  return (
    <Svg viewBox="0 0 512 512" height="75%" width="75%">
      <Path
        fill="#CD3144"
        d="M484.25 330l-101.59-43.55a45.86 45.86 0 0 0-53.39 13.1l-32.7 40a311.08 311.08 0 0 1-124.19-124.12l40-32.7a45.91 45.91 0 0 0 13.1-53.42L182 27.79a45.63 45.63 0 0 0-52.31-26.61L35.5 22.89A45.59 45.59 0 0 0 0 67.5C0 313.76 199.68 512.1 444.56 512a45.58 45.58 0 0 0 44.59-35.51l21.7-94.22a45.75 45.75 0 0 0-26.6-52.27zm-41.59 134.09C225.08 463.09 49 287 48 69.3l90.69-20.9 42.09 98.22-68.09 55.71c46.39 99 98.19 150.63 197 197l55.69-68.11 98.19 42.11z"
      />
    </Svg>
  );
};

const IconTick = () => {
  return (
    <Svg
      height="90%"
      width="90%"
      style={{margin: '5%'}}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill="#999"
        d="m7.7,404.6c0,0 115.2,129.7 138.2,182.68l99,0c41.5-126.7 202.7-429.1 340.92-535.1c28.6-36.8-43.3-52-101.35-27.62-87.5,36.7-252.5,317.2-283.3,384.64-43.7,11.5-89.8-73.7-89.84-73.7z"
      />
    </Svg>
  );
};

const IconWebsite = () => {
  return (
    <Svg height="75%" width="75%" viewBox="0 0 19 19">
      <Path
        fill="#CD3144"
        d="M9.5,19C4.3,19,0,14.7,0,9.5S4.3,0,9.5,0S19,4.3,19,9.5S14.7,19,9.5,19z M9.5,2C5.4,2,2,5.4,2,9.5,S5.4,17,9.5,17S17,13.6,17,9.5S13.6,2,9.5,2z"
      />
      <Polygon
        fill="#CD3144"
        points="15.4,15.8 10.6,12.2 12.7,9.1 10.8,7.2 13.1,2.6 14.9,3.4 13.2,6.8 15.3,8.9 13.4,11.8 16.6,14.2"></Polygon>
      <Polygon
        fill="#CD3144"
        points="4.9,16.4 3.1,15.6 5.7,10.3 1.4,6.8 2.6,5.2 8.3,9.7"></Polygon>
    </Svg>
  );
};

const IconMap = ({color, height = '50%', width = '50%'}) => {
  return (
    <Svg
      style={{color: color}}
      height={height}
      width={width}
      viewBox="0 0 576 512">
      <Path
        fill="currentColor"
        d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"
      />
    </Svg>
  );
};

const IconChevronDown = () => {
  return (
    <Svg
      style={{color: '#848490'}}
      width="15"
      height="15"
      viewBox="0 0 448 512">
      <Path
        fill="currentColor"
        d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
      />
    </Svg>
  );
};

const IconEmail = () => {
  return (
    <Svg style={{color: '#fff'}} width="15" height="15" viewBox="0 0 512 512">
      <Path
        fill="currentColor"
        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
      />
    </Svg>
  );
};

export const Icons = {
  bars: IconBars,
  home: IconHome,
  search: IconSearch,
  open: IconOpen,
  website: IconWebsite,
  phone: IconPhone,
  location: IconLocation,
  info: IconInfo,
  compass: IconCompass,
  nearer: IconNearer,
  tick: IconTick,
  map: IconMap,
  chevronDown: IconChevronDown,
  email: IconEmail,
};
