/*
 * @fileoverview    {RemisionesComponent}
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
import { RemisionesViewModel } from '../../model/remisiones.model';

/**
 * TODO: Description of {@code RemisionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones',
    templateUrl: './remisiones.component.html',
    standalone: false,
    styleUrls: ['./remisiones.component.css']
})
export class RemisionesComponent extends GenericComponent<RemisionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesViewModel) {
        super(entityInstance);
    }

}
