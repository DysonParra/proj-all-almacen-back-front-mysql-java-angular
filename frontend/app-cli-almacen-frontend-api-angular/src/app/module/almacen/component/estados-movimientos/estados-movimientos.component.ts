/*
 * @fileoverview    {EstadosMovimientosComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { EstadosMovimientosViewModel } from '../../model/estados-movimientos.model';

/**
 * TODO: Description of {@code EstadosMovimientosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-movimientos',
    templateUrl: './estados-movimientos.component.html',
    standalone: false,
    styleUrls: ['./estados-movimientos.component.css']
})
export class EstadosMovimientosComponent extends GenericComponent<EstadosMovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosMovimientosViewModel) {
        super(entityInstance);
    }

}
