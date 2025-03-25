/*
 * @fileoverview    {TiposMovimientosComponent}
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
import { TiposMovimientosViewModel } from '../../model/tipos-movimientos.model';

/**
 * TODO: Description of {@code TiposMovimientosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-movimientos',
    templateUrl: './tipos-movimientos.component.html',
    standalone: false,
    styleUrls: ['./tipos-movimientos.component.css']
})
export class TiposMovimientosComponent extends GenericComponent<TiposMovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposMovimientosViewModel) {
        super(entityInstance);
    }

}
