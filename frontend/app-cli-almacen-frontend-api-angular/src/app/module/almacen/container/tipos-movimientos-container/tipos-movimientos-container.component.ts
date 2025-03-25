/*
 * @fileoverview    {TiposMovimientosContainerComponent}
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
import { TiposMovimientosViewModel } from '../../model/tipos-movimientos.model';
import { TiposMovimientosFacade } from '../../facade/tipos-movimientos.facade';

/**
 * TODO: Description of {@code TiposMovimientosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-movimientos-container',
    templateUrl: './tipos-movimientos-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-movimientos-container.component.css']
})
export class TiposMovimientosContainerComponent extends GenericContainerComponent<TiposMovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposMovimientosViewModel,
        entityFacade: TiposMovimientosFacade) {
        super(entityInstance, entityFacade);
    }

}
