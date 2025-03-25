/*
 * @fileoverview    {RemisionesComprasMaterialesComponent}
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
import { RemisionesComprasMaterialesViewModel } from '../../model/remisiones-compras-materiales.model';

/**
 * TODO: Description of {@code RemisionesComprasMaterialesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-compras-materiales',
    templateUrl: './remisiones-compras-materiales.component.html',
    standalone: false,
    styleUrls: ['./remisiones-compras-materiales.component.css']
})
export class RemisionesComprasMaterialesComponent extends GenericComponent<RemisionesComprasMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesComprasMaterialesViewModel) {
        super(entityInstance);
    }

}
