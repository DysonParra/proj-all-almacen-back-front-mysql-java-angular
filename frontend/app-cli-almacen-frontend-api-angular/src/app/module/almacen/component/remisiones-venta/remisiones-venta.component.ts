/*
 * @fileoverview    {RemisionesVentaComponent}
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
import { RemisionesVentaViewModel } from '../../model/remisiones-venta.model';

/**
 * TODO: Description of {@code RemisionesVentaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-venta',
    templateUrl: './remisiones-venta.component.html',
    standalone: false,
    styleUrls: ['./remisiones-venta.component.css']
})
export class RemisionesVentaComponent extends GenericComponent<RemisionesVentaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesVentaViewModel) {
        super(entityInstance);
    }

}
