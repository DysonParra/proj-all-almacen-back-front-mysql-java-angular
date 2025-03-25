/*
 * @fileoverview    {SaldosContainerComponent}
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
import { SaldosViewModel } from '../../model/saldos.model';
import { SaldosFacade } from '../../facade/saldos.facade';

/**
 * TODO: Description of {@code SaldosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-saldos-container',
    templateUrl: './saldos-container.component.html',
    standalone: false,
    styleUrls: ['./saldos-container.component.css']
})
export class SaldosContainerComponent extends GenericContainerComponent<SaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SaldosViewModel,
        entityFacade: SaldosFacade) {
        super(entityInstance, entityFacade);
    }

}
