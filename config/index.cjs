/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxff3a22ad231cc76c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a3546c7fff789a8c84a1ae45e3757db6',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝子',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okq-46L1j4ie31CZGoHxuy0mvEQA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'wLDevDF5kVvRmOUEBZVcaXYhSWG9b0WsKL_kYLevjIM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝子', year: '2000', date: '11-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '大脑袋', year: '2000', date: '05-01',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2020', date: '10-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-22' },
       
       
      ],
    },
  ],
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wLDevDF5kVvRmOUEBZVcaXYhSWG9b0WsKL_kYLevjIM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okq-46ITEm9J2XYIduy1zDTQr5SY',
    }
  ],

}

module.exports = USER_CONFIG

