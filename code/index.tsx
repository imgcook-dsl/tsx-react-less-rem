'use strict';
import React, { useState, useEffect } from 'react';
import styles from './style.less';
interface Block1617073664286Props {}
const print = function(value) {
  console.log(value);
};
const Block1617073664286: React.FC<Block1617073664286Props> = ({}) => {
  const [state, setState] = useState([]);
  return (
    <div className={styles.mod}>
      <div className={styles.group}>
        <img
          className={styles.floorBg}
          src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e6b14310908c11eba2430d9e8b00eed7.png'}
          alt=""
        />
        <div className={styles.header}>
          <div className={styles.empty} />
          <div className={styles.block}>
            <img
              className={styles.icon}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e66c4ad0908c11eb9ec6e79617d0bab0.png'}
              alt=""
            />
            <img
              className={styles.iconLeft}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e689bde0908c11ebb677ad2ca8ee852c.png'}
              alt=""
            />
          </div>
          <span className={styles.title} lines={undefined}>
            客服中心
          </span>
        </div>
        <div className={styles.submain}>
          <span className={styles.caption} lines={undefined}>
            快捷入口
          </span>
          <div className={styles.section}>
            <div className={styles.containerI0}>
              <div className={styles.containerInner}>
                <div className={styles.wrapper}>
                  <span className={styles.title1} lines={undefined}>
                    投诉查询
                  </span>
                  <div className={styles.iconMinusWrapper}>
                    <img
                      className={styles.iconMinus}
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9fbb320908c11ebbe9b5f90bed0d98d.png'}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <img
                    className={styles.logo}
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9780430908c11eb8b42439bd6afb2a5.png'}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.containerInner1}>
                <img
                  className={styles.largeIcon}
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e98e9970908c11eb983bafaefb546a85.png'}
                  alt=""
                />
                <img
                  className={styles.icon1}
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9e59310908c11eb9ec6e79617d0bab0.png'}
                  alt=""
                />
                <div className={styles.wrapper2}>
                  <img
                    className={styles.icon2}
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9b81a70908c11eba9793fde3afc3830.png'}
                    alt=""
                  />
                  <img
                    className={styles.icon3}
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9cc8cd0908c11ebb8537df322fd248e.png'}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.containerI1}>
              <div className={styles.containerInner2}>
                <div className={styles.wrapper3}>
                  <span className={styles.caption1} lines={undefined}>
                    申诉中心
                  </span>
                  <div className={styles.iconMinusWrapper1}>
                    <img
                      className={styles.iconMinus1}
                      src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea763a50908c11eba9793fde3afc3830.png'}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.wrapper4}>
                  <img
                    className={styles.logo1}
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea150780908c11ebae8acd0785690140.png'}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.containerInner3}>
                <img
                  className={styles.largeIcon1}
                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea2cfc50908c11ebbee2fda99f64b2de.png'}
                  alt=""
                />
                <div className={styles.iconEnlargeWrapper}>
                  <img
                    className={styles.iconEnlarge}
                    src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ea5e93a0908c11eba2dcd9161397b354.png'}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <span className={styles.title2} lines={undefined}>
            常见问题
          </span>
          <div className={styles.block1}>
            <div className={styles.container}>
              <div className={styles.containerInner4}>
                <div className={styles.wrapper5}>
                  <div className={styles.wrapperInner}>
                    <div className={styles.group1}>
                      <img
                        className={styles.picture}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e7136040908c11eba2dcd9161397b354.png'}
                        alt=""
                      />
                      <div className={styles.view}>
                        <img
                          className={styles.icon4}
                          src={
                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e732a810908c11eba234bdb65ab42a15.png'
                          }
                          alt=""
                        />
                        <img
                          className={styles.icon5}
                          src={
                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e7509050908c11ebb009374e1212cb4c.png'
                          }
                          alt=""
                        />
                        <img
                          className={styles.icon6}
                          src={
                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e77137b0908c11eb9fa7c9a8eb23ee18.png'
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <span className={styles.caption2} lines={undefined}>
                      常见问题
                    </span>
                    <div className={styles.group2}>
                      <img
                        className={styles.icon7}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e6f6b080908c11eb983bafaefb546a85.png'}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper6}>
                  <div className={styles.empty1} />
                  <div className={styles.wrapperInner1}>
                    <div className={styles.titleWrapper}>
                      <span className={styles.title3} lines={undefined}>
                        师傅自身原因需取消订单
                      </span>
                    </div>
                    <div className={styles.group3}>
                      <img
                        className={styles.textBackground}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e78c87e0908c11ebb677ad2ca8ee852c.png'}
                        alt=""
                      />
                      <span className={styles.caption3} lines={undefined}>
                        取件前客户要求取消订单
                      </span>
                    </div>
                    <div className={styles.group4}>
                      <img
                        className={styles.textBackground1}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e7a95eb0908c11eba2430d9e8b00eed7.png'}
                        alt=""
                      />
                      <span className={styles.title4} lines={undefined}>
                        取件后客户要求取消订单
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerI01}>
              <img
                className={styles.divider}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e7c4aee0908c11ebbee2fda99f64b2de.png'}
                alt=""
              />
              <div className={styles.containerInner5}>
                <div className={styles.wrapper7}>
                  <div className={styles.wrapperInner2}>
                    <div className={styles.group5}>
                      <img
                        className={styles.image}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8513770908c11eb9ec6e79617d0bab0.png'}
                        alt=""
                      />
                      <img
                        className={styles.icon8}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8825990908c11ebb1bfc585b0ff41aa.png'}
                        alt=""
                      />
                      <img
                        className={styles.icon9}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e867f3c0908c11ebb677ad2ca8ee852c.png'}
                        alt=""
                      />
                    </div>
                    <span className={styles.caption4} lines={undefined}>
                      密码问题
                    </span>
                    <div className={styles.group6}>
                      <img
                        className={styles.icon10}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e83aa230908c11ebb8537df322fd248e.png'}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper8}>
                  <div className={styles.empty2} />
                  <div className={styles.wrapperInner3}>
                    <div className={styles.titleWrapper1}>
                      <span className={styles.title5} lines={undefined}>
                        货物代收无法提供收件密码怎么办
                      </span>
                    </div>
                    <div className={styles.group7}>
                      <img
                        className={styles.textBackground2}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8a21690908c11ebbee2fda99f64b2de.png'}
                        alt=""
                      />
                      <span className={styles.caption5} lines={undefined}>
                        收件人无法提供收件密码怎么办
                      </span>
                    </div>
                    <div className={styles.group8}>
                      <img
                        className={styles.textBackground3}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8b92100908c11eb983bafaefb546a85.png'}
                        alt=""
                      />
                      <span className={styles.title6} lines={undefined}>
                        寄件人不提供取件密码
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerI11}>
              <img
                className={styles.divider1}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8d02b70908c11eb83b681e17a20e140.png'}
                alt=""
              />
              <div className={styles.containerInner6}>
                <div className={styles.wrapper9}>
                  <div className={styles.wrapperInner4}>
                    <div className={styles.group9}>
                      <img
                        className={styles.figure}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8e78400908c11eba9793fde3afc3830.png'}
                        alt=""
                      />
                      <div className={styles.iconSmileWrapper}>
                        <img
                          className={styles.iconSmile}
                          src={
                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e91c9dc0908c11eb9ec6e79617d0bab0.png'
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <span className={styles.caption6} lines={undefined}>
                      其他问题
                    </span>
                    <div className={styles.group10}>
                      <img
                        className={styles.icon11}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e8003140908c11eb83b681e17a20e140.png'}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper10}>
                  <div className={styles.empty3} />
                  <div className={styles.wrapperInner5}>
                    <div className={styles.titleWrapper2}>
                      <span className={styles.title7} lines={undefined}>
                        奖励什么时候到账
                      </span>
                    </div>
                    <div className={styles.group11}>
                      <img
                        className={styles.textBackground4}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9349290908c11ebbe9b5f90bed0d98d.png'}
                        alt=""
                      />
                      <span className={styles.caption7} lines={undefined}>
                        什么处罚可以申诉
                      </span>
                    </div>
                    <div className={styles.group12}>
                      <img
                        className={styles.textBackground5}
                        src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/e9549db0908c11ebae8acd0785690140.png'}
                        alt=""
                      />
                      <span className={styles.title8} lines={undefined}>
                        如何进行投诉
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.captionWrapper}>
            <span className={styles.caption8} lines={undefined}>
              联系客服
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Block1617073664286;
