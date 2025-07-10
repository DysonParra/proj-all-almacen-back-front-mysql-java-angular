/*
 * @overview        {UbicacionesContainerComponent}
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
import { UbicacionesViewModel } from '../../model/ubicaciones.model';
import { UbicacionesFacade } from '../../facade/ubicaciones.facade';

/**
 * TODO: Description of {@code UbicacionesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ubicaciones-container',
    templateUrl: './ubicaciones-container.component.html',
    standalone: false,
    styleUrls: ['./ubicaciones-container.component.css']
})
export class UbicacionesContainerComponent extends GenericContainerComponent<UbicacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UbicacionesViewModel,
        entityFacade: UbicacionesFacade) {
        super(entityInstance, entityFacade);
    }

}
