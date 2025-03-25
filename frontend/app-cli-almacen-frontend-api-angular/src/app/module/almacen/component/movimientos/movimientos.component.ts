/*
 * @fileoverview    {MovimientosComponent}
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
import { MovimientosViewModel } from '../../model/movimientos.model';

/**
 * TODO: Description of {@code MovimientosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-movimientos',
    templateUrl: './movimientos.component.html',
    standalone: false,
    styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent extends GenericComponent<MovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MovimientosViewModel) {
        super(entityInstance);
    }

}
