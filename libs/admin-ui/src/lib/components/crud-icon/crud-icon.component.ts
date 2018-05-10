import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'

@Component({
  selector: 'ui-crud-icon',
  template: `
    <template #iconContainer></template>
  `,
})
export class CrudIconComponent implements OnInit, OnDestroy {
  @Input() data: any
  @Input() component: any
  @Output() action = new EventEmitter()
  @ViewChild('iconContainer', { read: ViewContainerRef }) iconContainer
  private componentRef: ComponentRef<any>

  constructor(private resolver: ComponentFactoryResolver) {
  }

  loadComponent() {
    this.iconContainer.clear()
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.component)
    this.componentRef = this.iconContainer.createComponent(factory)

    this.componentRef.instance.data = this.data
    this.componentRef.instance.action.subscribe(res => this.action.emit(res))
  }

  ngOnInit() {
    this.loadComponent()
  }

  ngOnDestroy() {
    this.componentRef.destroy()
  }

}
