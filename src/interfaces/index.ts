export interface social_interface {
  link: string
  icon: string
  classname?: string
}

export interface menu_interface {
  title: string
  slug: string
}

export interface list_product_menu_interface {
  link_img: string
  link_product: string
  title_product: string
}

export interface MenuModal_interface {
  isOpen: boolean
  toggle(): void
}
