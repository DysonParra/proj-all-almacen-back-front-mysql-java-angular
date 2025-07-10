/*
 * @overview        {EstadosRemisionesComponent}
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
import { EstadosRemisionesViewModel } from '../../model/estados-remisiones.model';

/**
 * TODO: Description of {@code EstadosRemisionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-remisiones',
    templateUrl: './estados-remisiones.component.html',
    standalone: false,
    styleUrls: ['./estados-remisiones.component.css']
})
export class EstadosRemisionesComponent extends GenericComponent<EstadosRemisionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosRemisionesViewModel) {
        super(entityInstance);
    }

}
