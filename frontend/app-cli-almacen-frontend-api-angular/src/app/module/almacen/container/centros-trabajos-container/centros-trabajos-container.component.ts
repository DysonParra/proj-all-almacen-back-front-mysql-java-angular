/*
 * @fileoverview    {CentrosTrabajosContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { CentrosTrabajosViewModel } from '../../model/centros-trabajos.model';
import { CentrosTrabajosFacade } from '../../facade/centros-trabajos.facade';

/**
 * TODO: Description of {@code CentrosTrabajosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-centros-trabajos-container',
    templateUrl: './centros-trabajos-container.component.html',
    standalone: false,
    styleUrls: ['./centros-trabajos-container.component.css']
})
export class CentrosTrabajosContainerComponent extends GenericContainerComponent<CentrosTrabajosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CentrosTrabajosViewModel,
        entityFacade: CentrosTrabajosFacade) {
        super(entityInstance, entityFacade);
    }

}
