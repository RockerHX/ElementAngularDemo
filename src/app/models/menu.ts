export class MenuModel {
    title: String;
    subMenus: Array<String>;
}


export const MENUS: MenuModel[] = [
    {
      title: 'Basic',
      subMenus: [
        'Layout 布局',
        'Container 布局容器',
        'Color 色彩',
        'Typography 字体',
        'Icon 图标',
        'Button 按钮'
      ]
    },
    {
      title: 'Form',
      subMenus: [
        'Radio 单选框',
        'Checkbox 多选框',
        'Input 输入框',
        'InputNumber 计数器',
        'Select 选择器',
        'Cascader 级联选择器',
        'Switch 开关',
        'DatePicker 日期选择器',
        'Slider 滑块',
        'Rate 评分',
        'Upload 上传',
        'Form 表单'
      ]
    },
    {
      title: 'Data',
      subMenus: [
        'Tag 标签',
        'Progress 进度条',
        'Badge 标记',
        'Pagination 分页',
        'Table 表格',
        'Tree 树型控件'
      ]
    },
    {
      title: 'Notice',
      subMenus: [
        'Loading 加载',
        'Message 消息提示',
        'Notification 通知',
        'Alert 警告'
      ]
    },
    {
      title: 'Navigation',
      subMenus: [
        'NavMenu 导航菜单',
        'Breadcrumb 面包屑',
        'Steps 步骤条',
        'Dropdown 下拉菜单'
      ]
    },
    {
      title: 'Others',
      subMenus: [
        'Tooltip 文字提示',
        'Card 卡片',
        'Dialog 对话框',
        'Carousel 走马灯',
        'Collapse 折叠面板'
      ]
    }
];
