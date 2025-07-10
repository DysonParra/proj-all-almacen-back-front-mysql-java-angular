/*
 * @overview        {ComponentesContainerComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { ComponentesViewModel } from '../../model/componentes.model';
import { ComponentesFacade } from '../../facade/componentes.facade';

/**
 * TODO: Description of {@code ComponentesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-componentes-container',
    templateUrl: './componentes-container.component.html',
    standalone: false,
    styleUrls: ['./componentes-container.component.css']
})
export class ComponentesContainerComponent extends GenericContainerComponent<ComponentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ComponentesViewModel,
        entityFacade: ComponentesFacade) {
        super(entityInstance, entityFacade);
    }

}
