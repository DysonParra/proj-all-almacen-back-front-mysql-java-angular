/*
 * @overview        {OrdenProduccionComponent}
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
import { OrdenProduccionViewModel } from '../../model/orden-produccion.model';

/**
 * TODO: Description of {@code OrdenProduccionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-orden-produccion',
    templateUrl: './orden-produccion.component.html',
    standalone: false,
    styleUrls: ['./orden-produccion.component.css']
})
export class OrdenProduccionComponent extends GenericComponent<OrdenProduccionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrdenProduccionViewModel) {
        super(entityInstance);
    }

}
