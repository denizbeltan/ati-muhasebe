import {useEffect} from 'react'
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ToggleComponent,
} from '../../../../assets/ts/components'
import {HtmlMenuMain} from '../HtmlMenuMain'

const HtmlMenuTabs = () => {
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
      DrawerComponent.reinitialization()
      ToggleComponent.reinitialization()
      // ScrollComponent.reinitialization()
    }, 50)
     
  }, [])
  return (
    <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_aside_menu" data-kt-menu="true"
    >
        <HtmlMenuMain />
    </div>
  )
}

export {HtmlMenuTabs}
