/*
 * @fileoverview    {RemisionesVentaMaterialesComponent}
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
import { RemisionesVentaMaterialesViewModel } from '../../model/remisiones-venta-materiales.model';

/**
 * TODO: Description of {@code RemisionesVentaMaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-venta-materiales',
    templateUrl: './remisiones-venta-materiales.component.html',
    standalone: false,
    styleUrls: ['./remisiones-venta-materiales.component.css']
})
export class RemisionesVentaMaterialesComponent extends GenericComponent<RemisionesVentaMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesVentaMaterialesViewModel) {
        super(entityInstance);
    }

}
