/*
 * @overview        {OrdenDeTrabajoComponent}
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
import { OrdenDeTrabajoViewModel } from '../../model/orden-de-trabajo.model';

/**
 * TODO: Description of {@code OrdenDeTrabajoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-orden-de-trabajo',
    templateUrl: './orden-de-trabajo.component.html',
    standalone: false,
    styleUrls: ['./orden-de-trabajo.component.css']
})
export class OrdenDeTrabajoComponent extends GenericComponent<OrdenDeTrabajoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrdenDeTrabajoViewModel) {
        super(entityInstance);
    }

}
