/*
 * @overview        {RemisionesComprasComponent}
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
import { RemisionesComprasViewModel } from '../../model/remisiones-compras.model';

/**
 * TODO: Description of {@code RemisionesComprasComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-compras',
    templateUrl: './remisiones-compras.component.html',
    standalone: false,
    styleUrls: ['./remisiones-compras.component.css']
})
export class RemisionesComprasComponent extends GenericComponent<RemisionesComprasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesComprasViewModel) {
        super(entityInstance);
    }

}
