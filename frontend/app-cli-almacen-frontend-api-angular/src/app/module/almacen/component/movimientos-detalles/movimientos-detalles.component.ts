/*
 * @overview        {MovimientosDetallesComponent}
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
import { MovimientosDetallesViewModel } from '../../model/movimientos-detalles.model';

/**
 * TODO: Description of {@code MovimientosDetallesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-movimientos-detalles',
    templateUrl: './movimientos-detalles.component.html',
    standalone: false,
    styleUrls: ['./movimientos-detalles.component.css']
})
export class MovimientosDetallesComponent extends GenericComponent<MovimientosDetallesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MovimientosDetallesViewModel) {
        super(entityInstance);
    }

}
