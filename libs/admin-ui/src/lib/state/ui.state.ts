import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { IsHandset, SetMenuItems, SetProfile, SetTitle } from './ui.actions'
import { Action, State, StateContext, Store } from '@ngxs/store'

export interface UiProfile {
  id: string
  name: string
  email: string
  avatar: string
}

export interface UiStateModel {
  name: string
  title: string
  isHandset?: boolean
  menuItems?: any[]
  defaultMenuItems?: any[]
  profile?: UiProfile
}

const defaultMenuItems = [
  {
    label: 'Conferences',
    link: '/conferences',
    icon: 'people',
  },
  {
    label: 'System',
    link: '/system',
    icon: 'computer',
  },
]

@State<UiStateModel>({
  name: 'ui',
  defaults: {
    name: 'ngx-conference',
    title: '',
    isHandset: false,
    menuItems: [...defaultMenuItems],
    defaultMenuItems
  },
})
export class UiState {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store,
  ) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe((res) => this.store.dispatch(new IsHandset(res.matches)))
  }

  @Action(IsHandset)
  isHandset(ctx: StateContext<UiStateModel>, action: IsHandset) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isHandset: action.isHandset
    });
  }

  @Action(SetMenuItems)
  setMenuItems(ctx: StateContext<UiStateModel>, action: SetMenuItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      menuItems: action.menuItems.length ? action.menuItems : defaultMenuItems
    });
  }

  @Action(SetTitle)
  setTitle(ctx: StateContext<UiStateModel>, action: SetTitle) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      title: action.title
    });
  }

  @Action(SetProfile)
  setProfile(ctx: StateContext<UiStateModel>, action: SetProfile) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      profile: action.profile
    });
  }

}
