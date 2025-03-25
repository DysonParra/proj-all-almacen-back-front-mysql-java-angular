/*
 * @fileoverview    {UbicacionesComponent}
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
import { UbicacionesViewModel } from '../../model/ubicaciones.model';

/**
 * TODO: Description of {@code UbicacionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ubicaciones',
    templateUrl: './ubicaciones.component.html',
    standalone: false,
    styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent extends GenericComponent<UbicacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UbicacionesViewModel) {
        super(entityInstance);
    }

}
