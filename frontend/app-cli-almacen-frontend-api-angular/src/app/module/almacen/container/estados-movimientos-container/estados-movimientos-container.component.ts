/*
 * @overview        {EstadosMovimientosContainerComponent}
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
import { EstadosMovimientosViewModel } from '../../model/estados-movimientos.model';
import { EstadosMovimientosFacade } from '../../facade/estados-movimientos.facade';

/**
 * TODO: Description of {@code EstadosMovimientosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-movimientos-container',
    templateUrl: './estados-movimientos-container.component.html',
    standalone: false,
    styleUrls: ['./estados-movimientos-container.component.css']
})
export class EstadosMovimientosContainerComponent extends GenericContainerComponent<EstadosMovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosMovimientosViewModel,
        entityFacade: EstadosMovimientosFacade) {
        super(entityInstance, entityFacade);
    }

}
