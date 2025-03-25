/*
 * @fileoverview    {MovimientosDetallesContainerComponent}
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
import { MovimientosDetallesViewModel } from '../../model/movimientos-detalles.model';
import { MovimientosDetallesFacade } from '../../facade/movimientos-detalles.facade';

/**
 * TODO: Description of {@code MovimientosDetallesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-movimientos-detalles-container',
    templateUrl: './movimientos-detalles-container.component.html',
    standalone: false,
    styleUrls: ['./movimientos-detalles-container.component.css']
})
export class MovimientosDetallesContainerComponent extends GenericContainerComponent<MovimientosDetallesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MovimientosDetallesViewModel,
        entityFacade: MovimientosDetallesFacade) {
        super(entityInstance, entityFacade);
    }

}
