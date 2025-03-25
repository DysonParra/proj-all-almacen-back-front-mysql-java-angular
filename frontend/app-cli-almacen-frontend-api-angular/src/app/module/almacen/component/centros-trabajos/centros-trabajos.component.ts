/*
 * @fileoverview    {CentrosTrabajosComponent}
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
import { CentrosTrabajosViewModel } from '../../model/centros-trabajos.model';

/**
 * TODO: Description of {@code CentrosTrabajosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-centros-trabajos',
    templateUrl: './centros-trabajos.component.html',
    standalone: false,
    styleUrls: ['./centros-trabajos.component.css']
})
export class CentrosTrabajosComponent extends GenericComponent<CentrosTrabajosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CentrosTrabajosViewModel) {
        super(entityInstance);
    }

}
